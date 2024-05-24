const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const potrace = require('potrace');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file upload
const upload = multer({ dest: 'uploads/' });

// Handle file upload and conversion
app.post('/convert', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const inputPath = req.file.path;
    const outputPath = `uploads/${req.file.filename}.svg`;

    sharp(inputPath)
        .toBuffer()
        .then(buffer => {
            potrace.trace(buffer, (err, svg) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('An error occurred while processing the image.');
                }
                fs.writeFileSync(outputPath, svg);
                res.sendFile(path.resolve(outputPath), (err) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).send('An error occurred while sending the SVG file.');
                    }
                    
                });
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('An error occurred while processing the image.');
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

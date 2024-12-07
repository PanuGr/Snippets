const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration for image processing
const config = {
  inputFolder: "./input-images", // Folder containing source images
  outputFolder: "./processed-images", // Folder to save processed images
  formats: ["webp", "jpg", "png"], // Formats to convert to
  sizes: [
    { width: 800, suffix: "-large" },
    { width: 400, suffix: "-medium" },
    { width: 200, suffix: "-small" },
  ],
};

// Ensure output folder exists
if (!fs.existsSync(config.outputFolder)) {
  fs.mkdirSync(config.outputFolder);
}

// Function to process images
async function processImages() {
  try {
    // Read all files in the input folder
    const files = fs.readdirSync(config.inputFolder);

    // Process each file
    for (const file of files) {
      const inputPath = path.join(config.inputFolder, file);
      const inputFileName = path.parse(file).name;

      // Process each defined size
      for (const size of config.sizes) {
        // Process each target format
        for (const format of config.formats) {
          const outputFileName = `${inputFileName}${size.suffix}.${format}`;
          const outputPath = path.join(config.outputFolder, outputFileName);

          await sharp(inputPath)
            .resize(size.width) // Resize maintaining aspect ratio
            .toFormat(format) // Convert to specified format
            .toFile(outputPath);

          console.log(`Processed: ${outputFileName}`);
        }
      }
    }

    console.log("All images processed successfully!");
  } catch (error) {
    console.error("Error processing images:", error);
  }
}

// Run the image processing
processImages();

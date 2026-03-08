import os
import glob
from PIL import Image

folder_path = r"c:\Users\Fahad\OneDrive\Videos\Captures\New folder\zaroori\galleries\int.dis.26\pics"

# Supported image extensions
extensions = ["*.jpg", "*.jpeg", "*.png", "*.bmp", "*.gif"]
image_files = []
for ext in extensions:
    image_files.extend(glob.glob(os.path.join(folder_path, ext)))
    image_files.extend(glob.glob(os.path.join(folder_path, ext.upper())))

image_files = list(set(image_files))

converted_count = 0
for img_path in image_files:
    try:
        with Image.open(img_path) as img:
            base_name = os.path.splitext(img_path)[0]
            webp_path = base_name + ".webp"
            # Ensure RGB mode before saving as webp (some images might be RGBA or P)
            if img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA")
            img.save(webp_path, "webp")
        # Remove the original file after successful conversion
        os.remove(img_path)
        converted_count += 1
    except Exception as e:
        print(f"Error converting {img_path}: {e}")

print(f"Successfully converted {converted_count} images to .webp.")

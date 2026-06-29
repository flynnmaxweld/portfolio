$base = "https://lukebaffait.fr"
$dest = "C:\Users\Flynn\.gemini\antigravity\scratch\portfolio"

$files = @(
  "works/index.html",
  "info/index.html",
  "contact/index.html",
  "404.html",
  "styles/works.css",
  "styles/info.css",
  "styles/contact.css",
  "styles/404.css",
  "js/works.js",
  "js/info.js",
  "js/contact.js",
  "js/404.js",
  "assets/images/shader background/background.png",
  "assets/images/footer/left.png",
  "assets/images/footer/right.png",
  "assets/images/projects/CyberDiagWebsite/image1.png",
  "assets/images/projects/CyberDiagWebsite/image2.png",
  "assets/images/projects/CyberDiagWebsite/image3.png",
  "assets/images/projects/Anima/image1.png",
  "assets/images/projects/Anima/image2.png",
  "assets/images/projects/Anima/image3.png",
  "assets/images/projects/cyberdiag/image1.png",
  "assets/images/projects/cyberdiag/image2.png",
  "assets/images/projects/cyberdiag/image3.png",
  "assets/images/projects/Zenith/image1.png",
  "assets/images/projects/Zenith/image2.png",
  "assets/images/projects/Zenith/image3.png",
  "assets/images/projects/skymcdb/image.png",
  "assets/images/projects/skymcdb/image2.png",
  "assets/images/projects/skymcdb/image3.png",
  "assets/images/projects/skymcdb/image4.png",
  "assets/images/projects/chromablock/image1.png",
  "assets/images/projects/chromablock/image2.png",
  "assets/images/projects/chromablock/image3.png",
  "assets/images/projects/symphony/image.png",
  "assets/images/projects/symphony/image2.png",
  "assets/images/projects/symphony/image3.png",
  "assets/images/projects/echo/image.png"
)

foreach ($f in $files) {
  $out = Join-Path $dest $f
  $dir = Split-Path $out -Parent
  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
  try {
    # Replace space with %20 for URI
    $uri = "$base/" + ($f -replace ' ', '%20')
    Invoke-WebRequest -Uri $uri -OutFile $out
    Write-Host "Downloaded: $f"
  } catch {
    Write-Host "Note (may not exist): $f"
  }
}

# Download 341 hero sequence frames
$heroDir = Join-Path $dest "assets\images\hero sequence"
if (!(Test-Path $heroDir)) { New-Item -ItemType Directory -Force -Path $heroDir | Out-Null }

Write-Host "Downloading hero sequence images..."
for ($i = 1; $i -le 341; $i++) {
  $num = $i.ToString("0000")
  $f = "assets/images/hero sequence/$num.jpg"
  $out = Join-Path $dest $f
  if (!(Test-Path $out)) {
    try {
      $uri = "$base/assets/images/hero%20sequence/$num.jpg?v=20260416-r2"
      Invoke-WebRequest -Uri $uri -OutFile $out
    } catch {
      Write-Host "Failed hero frame: $num"
    }
  }
}
Write-Host "All hero sequence images processed."

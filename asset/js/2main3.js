function zoom(zoomType) {
    var imageWidth = document.getElementById("image").clientWidth;
    if (zoomType == 'plus') {
        document.getElementById("image").style.width = (imageWidth + 50) + 'px';
    }
    if (zoomType == 'moins') {
        document.getElementById("image").style.width = (imageWidth - 50) + 'px';
    }

}
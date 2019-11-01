var slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById("show-prev-btn"),
    showNextBtn: document.getElementById("show-next-btn"),
    slideImage: document.getElementById("slide-img"),

    start: function () {
        var that = this;
        //subscribe to events
        this.showPrevBtn.addEventListener("click", function(e){
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener("click", function(e){
            that.onShowNextBtnClick(e);
        });

        //create images array
        this.imagesUrls.push("https://monaco-cars.rent/img/cars-img/aston-martin--vantage-4-7-436-cv/aston-martin--vantage-4-7-436-cv--b1b4b6cda14599a53161af11f8321259--640x480.jpg");
        this.imagesUrls.push("https://cars.usnews.com/dims4/USNEWS/553fff9/2147483647/resize/640x420%3E/format/jpeg/quality/85/?url=https%3A%2F%2Fcars.usnews.com%2Fstatic%2Fimages%2Farticle%2F201811%2F127832%2F07_DG018_Challenger____640x420.jpg");
        this.imagesUrls.push("https://media.zigcdn.com/media/content/2016/Dec/mustang720_720x540.jpg");
        this.imagesUrls.push("https://www.chicagoautoshow.com/assets/1/7/2020-Ford-Mustang-GT500-520.jpg");

        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },
    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }

    },
};
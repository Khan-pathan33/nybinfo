        const images = [
            "https://images.pexels.com/photos/33921119/pexels-photo-33921119/free-photo-of-iconic-magic-kingdom-entrance-at-disney-world.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/3428279/pexels-photo-3428279.jpeg",
            "https://images.pexels.com/photos/33957642/pexels-photo-33957642.jpeg width:500px height:500px",
            "https://images.pexels.com/photos/33921159/pexels-photo-33921159.jpeg"
        ];

        let currentIndex = 0;
        const sliderImage = document.getElementById("sliderImage");

        document.getElementById("nextBtn").addEventListener("click", function() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            sliderImage.src = images[currentIndex];
        });

        document.getElementById("prevBtn").addEventListener("click", function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            sliderImage.src = images[currentIndex];
        });
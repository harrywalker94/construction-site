window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add("display");
    }, 1000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

document.querySelector(".menu-item").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

document.querySelector(".about-us-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});



/* GoogleMaps API */

/* Map Options */
var options = {
    zoom: 7,
    center: {
        lat: 51.801128,
        lng: -0.19573,
    },
};

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), options);

    var marker = new google.maps.Marker({
        position: { lat: 51.801128, lng: -0.19573 },
        map: map,
        icon: "images/marker.png",
        draggable: true,
        animation: google.maps.Animation.DROP,
    });

    marker.addListener("click", toggleBounce);

    marker.addListener("click", function() {
        infoWindow.open(map, marker);
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
}
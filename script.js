    // Check out deviceful.app for full documentation

    /**
     * Laptop Example
     */

    var laptop = new Deviceful({
        parent: ".laptop",
        device: "laptop",
        screenshot: "/img/redgarden.jpg",
        screenshotHeight: 2402,
        enableFloor: false,
    });

    /**
     * Phone Example
     */

    var phoneLoadAnim = [{
            object: "camera",
            move: "position",
            axis: "y",
            duration: 1500,
            to: 0,
        },
        {
            object: "model",
            move: "rotation",
            axis: "y",
            to: 1,
            duration: 4000,
            delay: 1000,
        },
    ];

    var phone = new Deviceful({
        parent: ".phone",
        device: "phone",
        screenshot: "/img/redgarden_mobile.jpg",
        screenshotHeight: 2792,
        // cameraDistance: 15,
        // cameraHeight: 1,
        onLoadAnimation: phoneLoadAnim,
        enableFloor: false,
    });

    // Phones click animations

    var phoneParent = document.querySelector(".phone");
    var phoneFocusState = false;

    phoneParent.addEventListener("click", function () {
        if (!phoneFocusState) {
            // phone.swivel({
            //     to: 0,
            //     duration: 1000
            // });
            phone.scroll({
                duration: 3000
            });
            // phone.animate([{
            //         object: "camera",
            //         move: "position",
            //         axis: "z",
            //         to: 30,
            //         duration: 1000,
            //     },
            //     {
            //         object: "camera",
            //         move: "position",
            //         axis: "y",
            //         to: -2,
            //         duration: 1000,
            //     },
            // ]);
            phoneFocusState = true;
        } else {
            // phone.swivel({
            //     to: 45,
            //     duration: 1000,
            //     easing: "easeOutQuad"
            // });
            phone.scroll({
                direction: "up",
                duration: 3000
            });
            // phone.animate([{
            //         object: "camera",
            //         move: "position",
            //         axis: "z",
            //         to: 15,
            //         duration: 1000,
            //     },
            //     {
            //         object: "camera",
            //         move: "position",
            //         axis: "y",
            //         to: -1,
            //         duration: 1000,
            //     },
            // ]);
            phoneFocusState = false;
        }
    });

    // Mount your Deviceful instances to start them
    phone.mount();
    laptop.mount();

/*
    Tweenage Dirtbag - keyframe animation on scroll

    pass an array of keyframes:
        kf = [
            {
                trigger: ".element-what-triggers-animation",
                duration: 100%, // window height as percentage
                elements: [
                    {
                        selector: '.element-to-animate',
                        // list property values here, can be array
                        translateY: 200
                    }
                ]
            }
        ]
*/

function TweenageDirtbag(kf) {
    this.keyframes = kf;
    this.calculate();
}

TweenageDirtbag.prototype.percenttopixel = function (percent, percentof) {
    return (parseFloat(percent) / 100 * percentof);
};

TweenageDirtbag.prototype.calculate = function () {
    this.window = {
        height: window.innerHeight,
        width: window.innerWidth,
        scrollTop: window.scrollTop
    };

    this.calculatePage();
    console.log(this);
};

TweenageDirtbag.prototype.calculatePage = function () {
    for (let i = 0; i < this.keyframes.length; i++) {
        for (let j = 0; j < this.keyframes[i].elements.length; j++) {
            let that = this;
            this.keyframes[i].duration = this.percenttopixel(this.keyframes[i].duration, this.window.height);
            Object.keys(this.keyframes[i].elements[j]).forEach(function (k) {
                let value = that.keyframes[i].elements[j][k];

                if (k !== "selector") {
                    if (value instanceof Array === false) {
                        let values;
                        value = values = [ 0, value ];
                        console.log(values)
                    }

                    for (let h = 0; h < value.length; h++) {
                        if (k === "translateY") {
                            value[h] = that.percenttopixel(value[k], that.window.height);
                        } else {
                            value[h] = that.percenttopixel(value[k], that.window.width);
                        }
                    }
                }

                that.keyframes[i].elements[j][k] = value;

                //
                // if (k !== "selector" && value instanceof Array === false) {
                //     // If we haven't been given an array we need to get a position
                //     // to start from.
                //     let values;
                //     value = values = [ 0, value ];
                // }

                //
                // if (key !== "selector") {
                //     console.log(key + ": " + value);
                //
                //     if (value instanceof Array) {
                //         for (var h = 0; h < value.length; h++) {
                //             if (typeof value[h] === "string") {
                //
                //             }
                //         }
                //     } else {
                //         if (typeof value === "string") {
                //
                //         }
                //     }
                //
                //     this.keyframes[i].elements[j][key] = value;
                // }
            });
        }
    }
};

TweenageDirtbag.prototype.update = function () {
    window.requestAnimationFrame(function () {
        if (this.window.scrollTop > 0) {
            console.log("");
        }
    });
};

export default TweenageDirtbag;

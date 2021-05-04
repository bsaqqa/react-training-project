import React, { Component } from "react";


class TextComponent extends Component {
    render() {
        return (
            <div className="flex flex-wrap p-4">
                <h2 className=" lg:w-1/4 capitalize font-bold text-3xl my-8 lg:my-0">
                    our approach
                </h2>
                <div className="lg:w-3/4 text-sm text-gray-500 font-semibold">
                    <p className="">
                        Suspendisse potenti nullam ac tortor vitae purus faucibus. Tortor
                        condimentum lacinia quis vel eros donec ac odio. Sit amet cursus sit
                        amet. Tincidunt ornare massa eget egestas. Dui sapien eget mi proin
                        sed libero enim sed. Molestie a iaculis at erat pellentesque
                        adipiscing.
                    </p>
                    <p className="my-6">
                        Volutpat est velit egestas dui id ornare arcu. In aliquam sem
                        fringilla ut morbi tincidunt. Pellentesque eu tincidunt tortor
                        aliquam nulla facilisi cras fermentum. Cursus turpis massa tincidunt
                        dui ut ornare lectus. Sagittis vitae et leo duis ut diam quam nulla.
                    </p>
                    <p className="my-6">
                        Volutpat est velit egestas dui id ornare arcu. In aliquam sem
                        fringilla ut morbi tincidunt. Pellentesque eu tincidunt tortor
                        aliquam nulla facilisi cras fermentum. Cursus turpis massa tincidunt
                        dui ut ornare lectus. Sagittis vitae et leo duis ut diam quam nulla.
                    </p>
                </div>
            </div>
        );
    }
}

export default TextComponent;
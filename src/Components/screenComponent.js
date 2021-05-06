import React, { Component } from "react";
import screenObj from "./objectToScreen";


class Screen extends Component {
    state = { elements: [...screenObj] };
    render() {
        return (
            <div className="flex flex-wrap py-8">
                {this.state.elements.map((item, index) => {
                    return (
                        <article
                            key={index}
                            className="md:w-1/2 lg:px-4 w-full md:px-4  px-4 py-4"
                        >
                            <div className="w-full h-80  bg-gray-200 p-8 text-meduim flex items-end rounded-lg relative">
                                <p className="">{item.name}</p>
                                <a className="cursor-pointer p-6 absolute w-12 h-12 rounded-full shadow-lg  flex items-center justify-center top-8 right-8 bg-white hover:bg-gray-100">
                                    <i class="fas fa-long-arrow-alt-up transform rotate-45 "></i>
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        );
    }
}

export default Screen;
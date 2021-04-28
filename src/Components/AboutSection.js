import React from 'react'

export default function AboutSection() {
    return (
        <div className="flex flex-col   md:h-screen max-w-6xl mx-auto px-5 md:px-4 py-20 mt-10 md:mt-3 md:py-2 lg:px-6">
            <div className="flex items-center text-lg mb-2">
                <span className="text-gray-300 mr-4">Get to know us</span>
                <img className="h-4" src="images/Zigzag.svg" />
            </div>
            <div className="text-primary font-bold text-3xl mb-12"><h1>ABOUT US</h1></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor.
            </p>

            <div className="flex  flex-col  mt-4 md:flex-row">
                <div className="text-sm mb-4">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Pharetra massa massa ultricies mi quis hendrerit. Tortor at risus viverra adipiscing at in tellus. A iaculis at erat pellentesque adipiscing commodo elit at. Viverra mauris in aliquam sem. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
                </div>
                <div className="text-sm">
                    Diam ut venenatis tellus in metus vulputate eu. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Egestas diam in arcu cursus. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Egestas diam in arcu cursus.
                </div>
            </div>

        </div>
    )
}

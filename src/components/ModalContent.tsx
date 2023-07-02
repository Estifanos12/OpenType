const ModalContent = () => {
    return(
        <>
            <div className="font-mono text-accent w-[90%] mx-auto grid grid-rows-6 justify-center grid-flow-col gap-4 sm:grid-rows-4 sm:justify-normal lg:gap-10 lg:grid-rows-2 lg:justify-normal">
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent">wpm</h2>
                    <p className="text-secondaryAccent text-4xl">58</p>
                </div>
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent">acc</h2>
                    <p className="text-secondaryAccent text-4xl text-center">84%</p>
                </div>
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent">Character</h2>
                    <span className="text-md">(correct, incorrect and missed)</span>
                    <p className="text-secondaryAccent text-4xl text-center">45/11/0</p>
                </div>
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent inline">Character</h2>
                    <p className="text-secondaryAccent text-4xl text-center">45/11/0</p>
                </div>
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent inline">Character</h2>
                    <p className="text-secondaryAccent text-4xl text-center">45/11/0</p>
                </div>
                <div className="bg-secondary rounded-lg w-full flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-accent inline">Character</h2>
                    <p className="text-secondaryAccent text-4xl text-center">45/11/0</p>
                </div>
            </div>

            <div>
                
            </div>
        </>
    )
}

export default ModalContent;
import { useState } from "react";
export default function Formrequset() {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [serviceCat, setServiceCat] = useState("Service category");
    const [date, setDate] = useState("");
    const [typeInput, setTypeInput] = useState("text");
    const Options = ["Mangement", "Maintaince", "Productions"];
    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setServiceCat("Service category");
        setEmail("");
        setDate("");
        setTypeInput("text"); //  event.target[3].type = "text";
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        className="text-sm w-full pb-3 mb-2 text-white border-b border-white
                          bg-transparent placeholder-white placeholder-opacity-90 outline-none "
                        type="text"
                        name="username"
                        placeholder="Your name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className=" w-full pb-3 mb-2 text-white border-b border-white text-sm
                        bg-transparent placeholder-white placeholder-opacity-90  outline-none "
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="relative inline-block w-full text-white text-opacity-90 ">
                    <select
                        value={serviceCat}
                        onChange={(e) => setServiceCat(e.target.value)}
                        className="w-full pb-3 mb-2  border-b border-white bg-transparent text-xs
                         outline-none text-opacity-90 font-semibold font-opensans form-select
                         block form-multiselect "
                    >
                        <option value="Service category" disabled>
                            Service category
                        </option>
                        {Options.map((e, index) => {
                            return (
                                <option key={index} value={e}>
                                    {e}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className=" w-full pb-3 mb-8 text-white border-b  border-white bg-transparent
                        placeholder-white placeholder-opacity-90  outline-none "
                        type={typeInput}
                        onFocus={(e) => setTypeInput("date")}
                        name="date"
                        placeholder="Schedule a meeting"
                    />
                    <span className="z-10 h-full absolute w-6 right-0 px-1 py-1">
            <i>
              <img src="./images/dateicon.svg"
                  onClick={(e) => setTypeInput("date")}
              />
            </i>
          </span>
                </div>
                <div>
                    <input
                        className="w-full mt-6 bg-transparent text-white font-semibold font-opensans
                         py-3.5 px-4 mb-6  border-2 uppercase text-xs border-custom rounded-3xl
                         hover:bg-custom focus:outline-none "
                        type="submit"
                    />
                </div>
            </form>
        </>
    );
}

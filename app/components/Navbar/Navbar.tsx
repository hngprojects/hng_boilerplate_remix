
// import {getImages} from '../../lib/utils/utils';
import { getImages } from "~/lib/utils/utils";
// import Main from '../Main/Main';
const Navbar = () => {
  return (
    <>
      <div className="flex flex-col h-24 borderbtm">
        <div className="flex flex-col gap-6 mt-3 mx-56">
          <ul className="flex gap-4 text-nowrap">
            <li className="flex items-center gap-3">
              Choose starting point
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center gap-3">
              Generate with html
              <span>
                <img
                  src={getImages[0].arrow_right.imgLocation}
                  alt="arrow right icon"
                />
              </span>
            </li>
            <li className="flex items-center text-textgray gap-3">
             Preview Template
              
            </li>
          </ul>
        </div>
        <div className="flex justify-between mx-4">
          <ul className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <li>
                <img src={getImages[0].icon.imgLocation} alt="hamborger_icon" />
              </li>

              <li>
                <img src={getImages[0].logo.imgLocation} alt="logo" />
              </li>
              <li className="font-semibold text-2xl">
                <p>Boilerplate.</p>
              </li>
            </div>
            <div className="flex gap-2 font-bold text-xs">
              <li>Overview</li>
              <li className="text-orange">Email</li>
              <li>product</li>
            </div>
          </ul>
          <ul className="flex items-center justify-between gap-4">
            <li className="borderstyles relative">
              <input
                type="text"
                className="px-7 h-10 focus:outline-0 font-light"
                placeholder="Search Option..."
              />
              <img
                src={getImages[0].search_icon.imgLocation}
                alt=""
                className="absolute top-3 left-2 outline-none"
              />
            </li>
            <li>
              <img src={getImages[0].bell.imgLocation} alt="" />
            </li>
            <li>
              <img src={getImages[0].questionmark.imgLocation} alt="" />
            </li>
            <li>
              <img src={getImages[0].avatar.imgLocation} alt="" />
            </li>
            <li>
              <img src={getImages[0].dropdown_icon.imgLocation} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

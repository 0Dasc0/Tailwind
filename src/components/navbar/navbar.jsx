import { Link } from "react-router-dom";
import { Menu } from '@headlessui/react';
// import { MdKeyboardArrowDown } from "@react-icons/all-files/fa/MdKeyboardArrowDown";



export default function Navbar({imagen, navigations}) {
  return (
    <nav className="w-full h-auto bg-zinc-900 text-lime-500 font-semibold p-2 flex justify-between ">
      
      <div className="flex w-full justify-between max-[450px]:hidden">

      <div className="flex justify-evenly ">
            <Link to="/Menu">
                <img src={imagen} className="w-16"/>
            </Link>

            <ol className="list-none flex">
                {navigations.map((data) => (
                    <li className="m-auto mx-3.5">
                        <Link to={data.url}>{data.name}</Link>
                    </li>
                ))}
            </ol>
      </div>

      <div className="flex justify-evenly ">
        <ul className="list-none flex justify-between">
          <li className="m-auto mx-3.5">
            <a href="">Salir</a>
          </li>
        </ul>
      </div>

      </div>
      


<div className="hidden w-full justify-between m-auto block max-[450px]:block">
    


<Menu>
<div className="flex justify-between">
            <img src={imagen} className="w-8"/>
        
    <Menu.Button> 
       ICON 
                
        </Menu.Button>
        </div>
    
       
      <Menu.Items>
        
     

        <div>
        <Menu.Item>
          {({ active }) => (
            <ol className="list-none flex">
            {navigations.map((data) => (
                <li className="m-auto mx-3.0">
                    <Link to={data.url}>{data.name}</Link>
                </li>
                
            ))}
            <li className="m-auto mx-3.5">
            <a href="">Salir</a>
          </li>
        </ol>
          )}
        </Menu.Item>
        </div>
        
        

      
        
      </Menu.Items>
    </Menu>
    
      
</div>
    </nav>
  );
}

<script src="../path/to/flowbite/dist/flowbite.js"></script>
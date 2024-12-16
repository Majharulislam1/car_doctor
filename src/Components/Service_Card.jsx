import { FaArrowRight } from "react-icons/fa";
 

const Service_Card = ({service}) => {
    
    const {title,img,price} = service;
    return (
        <div>
            <div className="p-4 border rounded-lg">
                <div   >
                    <img src={img} className="rounded-lg" alt="" />
                </div>
                <div className="pt-4 ">
                    <h3 className="text-2xl font-bold text-[#444444]">{title}</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold text-primary py-3">Price : ${price}</p>

                        <FaArrowRight  className="text-2xl text-primary"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service_Card;
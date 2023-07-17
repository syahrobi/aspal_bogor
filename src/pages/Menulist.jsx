import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
    {
       url: "/img/ruko_sunat_01.jpeg",
    },
    {
       url: "/img/taman_jonggol_02.jpeg",
    },
    {
        url: "/img/taman_jonggol_01.jpeg",
     },
    {
       url: "/img/pajajran_bogor_01.jpeg",
    },
    {
       url: "/img/cijeruk_02.jpeg",
    },
    {
       url: "/img/depok_02.jpeg",
    },
    {
       url: "/img/gadog_puncak_01.jpeg",
    },
    {
       url: "/img/gadog_puncak_02.jpeg",
    },
    {
        url: "/img/gadog_puncak_03.jpeg",
    },
    {
        url: "/img/hambalang_01.jpeg",
    },
    {
        url: "/img/hambalang_02.jpeg",
    },
    {
        url: "/img/hambalang_03.jpeg",
    },
    {
        url: "/img/hambalang_04.jpeg",
    },
    {
        url: "/img/hambalang_05.jpeg",
    },
    {
        url: "/img/hambalang_06.jpeg",
    },
    {
        url: "/img/hambalang_07.jpeg",
    },
    {
        url: "/img/hambalang_08.jpeg",
    },
    {
        url: "/img/pabrik_gudang_bekasi_01.jpeg",
    },
    {
        url: "/img/pabrik_gudang_tangerang_01.jpeg",
    },
    {
        url: "/img/sentul_01.jpeg",
    },
    {
        url: "/img/sentul_03.jpeg",
    },
    {
        url: "/img/villa_duta_bogor_01.jpeg",
    },
 ];

const Menulist = ({meals}) => {
    return (
			<div>
                <div className='meal-container'>
                    <div className=''>
                    <SimpleImageSlider
                        width={420}
                        height={173}
                        images={sliderImages}
                        showNavs={true}
                        autoPlay={true}
                    />
                    </div>
				    {meals.map((meal) => (
					    <div key={meal.id}>
						    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                <img src={meal.img} alt='img' className='img' />
                                <div className=" flex flex-col">
                                    <div className='title-price'>
                                        <h5>{meal.title}</h5>
                                    </div>
                                    <div>
                                        <small className='ml-3 w-full'>
                                            -----------------------------------
                                        </small>
                                        <p className='para-menu'>{meal.para}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
				    ))}
                </div>
			</div>
		);
}

export default Menulist

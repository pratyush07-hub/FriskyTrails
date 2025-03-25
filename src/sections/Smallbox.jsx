import React from 'react'




const Smallbox = () => {
    const data = [
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
        {
            name: "ASIA",
            image: "/images/rock.jpg"
        },
    ]
  return (
    <>
    {
        data.map((item, index) => (
       <div key={index} className="img h-[12vh] w-[6vw]">
            <div className='flex justify-center items-center' style={{
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundImage: `url(${item.image})`,
            }}>
                <h3 className='text-white tracking-tighter text-sm font-bold'>{item.name}</h3>
            </div>
       </div>
        ))
    }
    </>
  )
}

export default Smallbox

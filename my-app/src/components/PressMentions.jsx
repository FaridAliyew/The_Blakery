import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { createClient } from '@supabase/supabase-js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PressMentions() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL2;
  const supabaseKey = import.meta.env.VITE_SUPABASE_KEY2;
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [pressItems, setPressItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('the-blakery')
        .select('*')

      if (error) {
        console.error('Supabase Error:', error)
      } else {
        setPressItems(data)
      }
    }

    fetchData()
  }, [])

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <section
      className="press-mentions bg-amber-500"
      style={{
        padding: '20px 20px'
      }}
    >
      <Slider {...settings}>
        {pressItems.map((item) => (
          <div key={item.id}>
            <img className='px-7'
              src={item.image_url}
              alt={item.title || 'Press Mention'}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default PressMentions

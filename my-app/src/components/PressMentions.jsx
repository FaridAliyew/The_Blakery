import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { createClient } from '@supabase/supabase-js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PressMentions() {
  // Supabase konfiqurasiyası
  const supabaseUrl = 'https://xnykiejhjsppxvnmqcev.supabase.co'
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhueWtpZWpoanNwcHh2bm1xY2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMyODk0NDcsImV4cCI6MjAzODg2NTQ0N30.GTpLwlyahu9lMtSdKkCX4C9PtcT_7rvZPRCPYdkP1NY'
  const supabase = createClient(supabaseUrl, supabaseKey)

  const [pressItems, setPressItems] = useState([])

  // Component yüklənəndə Supabase-dən məlumatı götür
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

  // react-slick konfiqurasiyası
  const settings = {
    dots: false,           // Nöqtələri yığışdır
    arrows: false,         // Ox işarələrini yığışdır
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,        // Avtomatik slayd
    autoplaySpeed: 3000,   // 3 saniyədən bir slayd keçsin
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

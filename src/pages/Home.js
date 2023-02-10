import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import Cds from '../components/Cds'
import axios from 'axios'
import Methodes from '../components/Methodes'
import { Activites } from '../components/Activites'
import { Link } from 'react-router-dom'
import { Hospital } from 'react-bootstrap-icons'

const Home = () => {
  const [cds, setCds] = useState([])

  useEffect(() => {
    getCDS()
  }, [])

  const getCDS = async () => {
    const data = await axios.get('https://api.npoint.io/21d771eb6ff6e4e0fbe3')

    console.log('This are the cds')

    console.log(data.data.cds)

    setCds(data.data.cds)
  }

  return (
    <>
      <div className='container-fluid wrapper'>
        <div className=' row home  flex '>
          <div className=' col-md-7 home_info'>
            {/* <svg 
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M673.125 262.73L673.004 262.79L625.462 347.266L530.527 389.454L530.407 389.514L482.879 473.99L387.945 516.178L387.824 516.238L340.297 600.714L276.46 629.072H278.373L340.794 601.33L340.914 601.271L388.457 516.794L483.391 474.606L483.512 474.546L531.054 390.07L625.989 347.882L626.109 347.822L673.637 263.346L768.571 221.158L768.691 221.098L799.97 165.516V163.807L768.059 220.522L673.125 262.73ZM661.243 252.158L661.122 252.218L613.595 336.694L518.66 378.882L518.54 378.942L471.012 463.418L376.078 505.607L375.958 505.666L328.43 590.142L240.83 629.072H242.742L328.927 590.778L329.048 590.719L376.575 506.242L471.509 464.054L471.63 463.994L519.157 379.518L614.092 337.33L614.212 337.27L661.74 252.794L756.674 210.606L756.794 210.546L799.955 133.84V132.131L756.162 209.97L661.243 252.158ZM708.65 41.0174L661.122 125.494L566.188 167.682L566.067 167.742L518.54 252.218L423.606 294.406L423.485 294.466L375.912 378.942L280.963 421.13L280.843 421.19L233.315 505.666L138.366 547.855L138.245 547.914L92.5851 629.072H93.5489L138.893 548.471L233.827 506.282L233.948 506.223L281.475 421.746L376.409 379.558L376.53 379.498L424.057 295.022L519.007 252.834L519.127 252.774L566.685 168.298L661.619 126.11L661.74 126.05L709.267 41.5739L799.97 1.2733V0.438671L708.77 40.9578L708.65 41.0174ZM720.532 51.5695L673.004 136.046L578.055 178.234L577.934 178.294L530.407 262.77L435.457 304.958L435.337 305.018L387.809 389.494L292.86 431.682L292.739 431.742L245.212 516.218L150.263 558.407L150.142 558.466L110.415 629.072H111.379L150.79 559.043L245.724 516.854L245.845 516.794L293.372 432.318L388.321 390.13L388.442 390.07L435.969 305.594L530.904 263.406L531.024 263.346L578.567 178.87L673.501 136.682L673.622 136.622L721.164 52.1458L799.97 17.1312V16.2767L720.652 51.5298L720.532 51.5695ZM779.956 357.818L732.428 442.294L637.494 484.482L637.374 484.542L589.846 569.018L494.912 611.207L494.791 611.266L484.777 629.072H485.741L495.439 611.843L590.373 569.654L590.494 569.595L638.021 485.118L732.956 442.93L733.076 442.87L780.603 358.394L800 349.77V348.915L780.091 357.758L779.956 357.818ZM791.838 368.39L744.31 452.866L649.376 495.054L649.255 495.114L601.728 579.59L506.794 621.779L506.673 621.838L502.592 629.072H503.556L507.306 622.395L602.24 580.206L602.36 580.147L649.888 495.67L744.837 453.482L744.958 453.422L792.485 368.946L800 365.608V364.753L791.973 368.31L791.838 368.39ZM696.888 283.834L696.768 283.894L649.24 368.37L554.306 410.558L554.186 410.618L506.658 495.094L411.724 537.283L411.603 537.342L364.076 621.818L347.782 629.052H349.694L364.588 622.434L364.708 622.375L412.206 537.919L507.14 495.73L507.26 495.67L554.788 411.194L649.737 369.006L649.858 368.946L697.385 284.47L792.32 242.282L792.44 242.222L799.955 228.868V227.159L791.808 241.646L696.888 283.834ZM685.006 273.282L684.886 273.342L637.358 357.818L542.424 400.006L542.304 400.066L494.776 484.542L399.842 526.731L399.721 526.79L352.194 611.266L312.136 629.072H314.049L352.706 611.902L352.826 611.843L400.354 527.366L495.288 485.178L495.409 485.118L542.936 400.642L637.87 358.454L637.991 358.394L685.518 273.918L780.453 231.73L780.573 231.67L799.97 197.192V195.483L779.941 231.094L685.006 273.282ZM768.074 93.8175L720.547 178.294L625.612 220.482L625.492 220.542L577.964 305.018L483.03 347.206L482.909 347.266L435.382 431.742L340.387 473.93L340.267 473.99L292.739 558.466L197.805 600.655L197.685 600.714L181.722 629.072H182.685L198.317 601.271L293.251 559.082L293.372 559.023L340.899 474.546L435.834 432.358L435.954 432.298L483.482 347.822L578.416 305.634L578.537 305.574L626.064 221.098L720.998 178.91L721.119 178.85L768.646 94.3739L799.925 80.4834V79.6289L768.134 93.7579L768.074 93.8175ZM791.838 114.942L744.31 199.418L649.376 241.606L649.255 241.666L601.728 326.142L506.794 368.33L506.673 368.39L459.131 452.866L364.196 495.054L364.076 495.114L316.548 579.59L221.614 621.779L221.493 621.838L217.412 629.072H218.376L222.126 622.395L317.06 580.206L317.181 580.147L364.708 495.67L459.643 453.482L459.763 453.422L507.306 368.946L602.24 326.758L602.36 326.698L649.888 242.222L744.837 200.034L744.958 199.974L792.485 115.498L800 112.159V111.305L791.973 114.862L791.838 114.942ZM779.956 104.37L732.428 188.846L637.494 231.034L637.374 231.094L589.846 315.57L494.912 357.758L494.791 357.818L447.264 442.294L352.329 484.482L352.209 484.542L304.682 569.018L209.747 611.207L209.627 611.266L199.612 629.072H200.576L210.274 611.843L305.209 569.654L305.329 569.595L352.857 485.118L447.791 442.93L447.911 442.87L495.439 358.394L590.373 316.206L590.494 316.146L638.021 231.67L732.956 189.482L733.076 189.422L780.603 104.946L800 96.3214V95.4669L780.091 104.31L779.956 104.37ZM732.413 62.1415L684.871 146.618L589.936 188.806L589.816 188.866L542.289 273.342L447.354 315.53L447.234 315.59L399.706 400.066L304.772 442.254L304.651 442.314L257.124 526.79L162.19 568.979L162.069 569.038L128.291 629.072H129.255L162.717 569.595L257.651 527.406L257.772 527.347L305.299 442.87L400.233 400.682L400.354 400.622L447.881 316.146L542.816 273.958L542.936 273.898L590.464 189.422L685.398 147.234L685.518 147.174L733.046 62.6979L799.97 32.9692V32.1147L732.534 62.0818L732.413 62.1415ZM696.888 30.4058L696.768 30.4654L649.24 114.942L554.306 157.13L554.186 157.19L506.658 241.666L411.724 283.854L411.603 283.914L364.076 368.39L269.141 410.578L269.021 410.638L221.493 495.114L126.559 537.302L126.439 537.362L78.9112 621.838L62.6169 629.072H64.5295L79.4232 622.454L79.5437 622.395L126.996 537.919L221.93 495.73L222.051 495.67L269.578 411.194L364.543 369.006L364.663 368.946L412.191 284.47L507.125 242.282L507.245 242.222L554.773 157.746L649.707 115.558L649.828 115.498L697.355 31.0218L792.29 -11.1666L792.41 -11.2262L799.925 -24.5803V-26.2893L791.778 -11.8025L696.888 30.4058ZM744.295 72.6935L696.768 157.17L601.818 199.358L601.698 199.418L554.17 283.894L459.236 326.082L459.116 326.142L411.588 410.618L316.654 452.806L316.533 452.866L269.006 537.342L174.071 579.531L173.951 579.59L146.106 629.072H147.07L174.583 580.167L269.518 537.978L269.638 537.919L317.166 453.442L412.1 411.254L412.221 411.194L459.748 326.718L554.682 284.53L554.803 284.47L602.33 199.994L697.28 157.806L697.4 157.746L744.928 73.2698L799.97 48.8073V47.9528L744.431 72.6339L744.295 72.6935ZM768.074 347.266L720.547 431.742L625.612 473.93L625.492 473.99L577.964 558.466L483.015 600.655L482.894 600.714L466.931 629.072H467.895L483.527 601.271L578.461 559.082L578.582 559.023L626.109 474.546L721.044 432.358L721.164 432.298L768.691 347.822L799.97 333.932V333.077L768.179 347.206L768.074 347.266ZM779.956 -22.3546L685.021 19.8338L684.901 19.8934L637.374 104.37L542.439 146.558L542.319 146.618L494.746 231.094L399.812 273.282L399.691 273.342L352.164 357.818L257.229 400.006L257.109 400.066L209.582 484.542L114.647 526.731L114.527 526.79L66.9992 611.266L26.9412 629.072H28.8538L67.5112 611.902L67.6317 611.843L115.159 527.366L210.094 485.178L210.214 485.118L257.741 400.642L352.676 358.454L352.796 358.394L400.324 273.918L495.258 231.73L495.379 231.67L542.906 147.194L637.84 105.005L637.961 104.946L685.488 20.4697L780.423 -21.7187L780.543 -21.7783L799.985 -56.2563V-57.9653L779.956 -22.3546ZM756.177 83.2654L708.65 167.742L613.7 209.93L613.58 209.99L566.052 294.466L471.103 336.654L470.982 336.714L423.455 421.19L328.521 463.378L328.4 463.438L280.873 547.914L185.938 590.103L185.818 590.162L163.921 629.092H164.885L186.465 590.738L281.4 548.55L281.52 548.49L329.063 464.014L423.997 421.826L424.118 421.766L471.66 337.29L566.594 295.102L566.715 295.042L614.242 210.566L709.192 168.378L709.312 168.318L756.84 83.8418L800 64.6652V63.8107L756.328 83.2058L756.177 83.2654ZM732.413 569.018L698.635 629.052H699.599L733.061 569.575L799.985 539.846V538.992L732.549 568.959L732.413 569.018ZM744.295 579.59L716.45 629.072H717.414L744.943 580.167L799.985 555.704V554.849L744.431 579.531L744.295 579.59ZM708.65 547.894L662.99 629.052H663.953L709.297 548.451L800 508.15V507.296L708.785 547.855L708.65 547.894ZM756.177 590.142L734.281 629.072H735.245L756.825 590.719L799.985 571.542V570.688L756.313 590.083L756.177 590.142ZM696.888 537.283L696.768 537.342L649.24 621.818L632.946 629.052H634.859L649.752 622.434L649.873 622.375L697.4 537.919L792.335 495.73L792.455 495.67L799.97 482.316V480.607L791.823 495.094L696.888 537.283ZM791.838 621.818L787.757 629.052H788.72L792.47 622.375L799.985 619.036V618.182L791.958 621.739L791.838 621.818ZM779.956 611.266L769.941 629.072H770.905L780.603 611.843L800 603.218V602.364L780.091 611.207L779.956 611.266ZM756.177 336.694L708.65 421.17L613.7 463.358L613.58 463.418L566.052 547.894L471.103 590.083L470.982 590.142L449.086 629.072H450.05L471.63 590.719L566.564 548.53L566.685 548.471L614.212 463.994L709.162 421.806L709.282 421.746L756.81 337.27L799.97 318.094V317.239L756.298 336.634L756.177 336.694ZM768.074 600.714L752.111 629.072H753.075L768.706 601.271L799.985 587.38V586.526L768.194 600.655L768.074 600.714ZM685.006 526.731L684.886 526.79L637.358 611.266L597.301 629.072H599.213L637.87 611.902L637.991 611.843L685.518 527.366L780.453 485.178L780.573 485.118L799.97 450.64V448.931L779.941 484.542L685.006 526.731ZM720.532 305.018L673.004 389.494L578.07 431.682L577.949 431.742L530.422 516.218L435.472 558.407L435.352 558.466L395.625 629.072H396.559L435.969 559.043L530.904 516.854L531.024 516.794L578.552 432.318L673.486 390.13L673.606 390.07L721.134 305.594L799.94 270.58V269.725L720.622 304.978L720.532 305.018ZM744.295 326.142L696.768 410.618L601.818 452.806L601.698 452.866L554.17 537.342L459.236 579.531L459.116 579.59L431.271 629.072H432.235L459.748 580.167L554.682 537.958L554.803 537.899L602.33 453.422L697.28 411.234L697.4 411.174L744.928 326.698L799.97 302.236V301.381L744.431 326.082L744.295 326.142ZM732.413 315.59L684.886 400.066L589.952 442.254L589.831 442.314L542.304 526.79L447.369 568.979L447.249 569.038L413.471 629.072H414.434L447.896 569.595L542.831 527.406L542.951 527.347L590.479 442.87L685.413 400.682L685.534 400.622L733.061 316.146L799.985 286.418V285.563L732.549 315.53L732.413 315.59ZM708.65 294.466L661.122 378.942L566.188 421.13L566.067 421.19L518.54 505.666L423.575 547.855L423.455 547.914L377.795 629.072H378.759L424.103 548.471L519.052 506.282L519.172 506.223L566.7 421.746L661.634 379.558L661.755 379.498L709.282 295.022L799.985 254.722V253.867L708.785 294.386L708.65 294.466ZM673.125 516.159L673.004 516.218L625.462 600.714L561.64 629.072H563.552L625.974 601.33L626.094 601.271L673.622 516.794L768.556 474.606L768.676 474.546L799.955 418.964V417.255L768.044 473.97L673.125 516.159ZM661.243 505.607L661.122 505.666L613.595 590.142L525.994 629.072H527.907L614.092 590.778L614.212 590.719L661.74 506.242L756.674 464.054L756.794 463.994L799.955 387.288V385.579L756.162 463.418L661.243 505.607ZM720.532 558.466L680.805 629.072H681.769L721.179 559.043L799.985 524.008V523.154L720.667 558.407L720.532 558.466ZM55.6896 221.098L150.639 178.93L150.76 178.87L198.287 94.3938L293.221 52.2054L293.342 52.1458L340.884 -32.3304L435.819 -74.5188L435.939 -74.5784L440.02 -81.8317H439.056L435.307 -75.1547L340.387 -32.9663L340.267 -32.9067L292.739 51.5695L197.805 93.7579L197.685 93.8175L150.127 178.294L55.1927 220.482L55.0722 220.542L7.52969 305.018L0.0150597 308.356V309.211L8.16219 305.594L55.6896 221.098ZM31.9259 326.698L79.4533 242.222L174.388 200.034L174.508 199.974L222.036 115.498L316.97 73.3095L317.09 73.2499L364.618 -11.2262L459.552 -53.4146L459.673 -53.4742L475.636 -81.8317H474.672L459.025 -54.0307L364.151 -11.8423L364.031 -11.7826L316.503 72.6935L221.569 114.882L221.448 114.942L173.921 199.418L78.9564 241.606L78.8359 241.666L31.2934 326.142L0.0150597 340.032V340.887L31.8054 326.758L31.9259 326.698ZM114.978 400.682L115.099 400.622L162.626 316.146L257.561 273.958L257.681 273.898L305.209 189.422L400.143 147.234L400.264 147.174L447.791 62.6979L542.725 20.5095L542.846 20.4499L590.373 -64.0263L630.446 -81.8317H628.534L589.861 -64.6423L589.741 -64.5827L542.213 19.8934L447.279 62.0818L447.158 62.1415L399.631 146.618L304.697 188.806L304.576 188.866L257.049 273.342L162.114 315.53L161.994 315.59L114.466 400.066L19.532 442.254L19.4116 442.314L0.0150597 476.792V478.501L20.044 442.89L114.978 400.682ZM103.097 390.13L103.217 390.07L150.744 305.594L245.679 263.406L245.799 263.346L293.327 178.87L388.276 136.682L388.397 136.622L435.924 52.1458L530.858 9.95739L530.979 9.89778L578.506 -74.5784L594.816 -81.8317H592.903L578.009 -75.2143L577.889 -75.1547L530.346 9.32149L435.412 51.5099L435.292 51.5695L387.764 136.046L292.86 178.234L292.739 178.294L245.212 262.77L150.263 304.958L150.142 305.018L102.615 389.494L7.68029 431.682L7.55981 431.742L0.0451778 445.096V446.805L8.19231 432.318L103.097 390.13ZM24.4715 -81.8317H22.5439L7.65017 -75.2143L7.52969 -75.1547L0.0150597 -61.8006V-60.0916L8.16219 -74.5784L24.4715 -81.8317ZM67.5715 358.394L115.099 273.918L210.033 231.73L210.154 231.67L257.681 147.194L352.616 105.005L352.736 104.946L400.279 20.4697L495.213 -21.7187L495.333 -21.7783L529.112 -81.8317H528.148L494.746 -22.3546L399.812 19.8338L399.691 19.8934L352.149 104.37L257.214 146.558L257.094 146.618L209.566 231.094L114.632 273.282L114.512 273.342L66.9842 357.818L0.0602375 387.547V388.401L67.4962 358.434L67.5715 358.394ZM55.6896 347.822L103.217 263.346L198.166 221.158L198.287 221.098L245.814 136.622L340.749 94.4336L340.869 94.3739L388.397 9.89778L483.331 -32.2906L483.452 -32.3502L511.296 -81.8317H510.333L482.804 -32.9067L387.87 9.28174L387.749 9.34136L340.222 93.8175L245.287 136.006L245.167 136.066L197.639 220.542L102.69 262.73L102.569 262.79L55.0421 347.266L0 371.728V372.583L55.5541 347.902L55.6896 347.822ZM43.8078 337.27L91.3352 252.794L186.285 210.606L186.405 210.546L233.933 126.07L328.867 83.8815L328.987 83.8219L376.515 -0.654291L471.449 -42.8427L471.57 -42.9023L493.466 -81.8317H492.502L470.922 -43.4786L376.033 -1.2902L375.912 -1.23058L328.385 83.2456L233.451 125.434L233.33 125.494L185.803 209.97L90.8382 252.158L90.7178 252.218L43.1903 336.694L0.030118 355.87V356.725L43.7023 337.33L43.8078 337.27ZM31.9259 580.147L79.4684 495.67L174.403 453.482L174.523 453.422L222.051 368.946L316.985 326.758L317.106 326.698L364.633 242.222L459.567 200.034L459.688 199.974L507.215 115.498L602.15 73.3095L602.27 73.2499L649.798 -11.2262L744.747 -53.4146L744.867 -53.4742L760.83 -81.8317H759.867L744.235 -54.0307L649.361 -11.8423L649.24 -11.7826L601.713 72.6935L506.779 114.882L506.658 114.942L459.131 199.418L364.196 241.606L364.076 241.666L316.548 326.142L221.614 368.33L221.493 368.39L173.966 452.866L78.9564 495.054L78.8359 495.114L31.2934 579.59L0.0150597 593.481V594.335L31.8054 580.206L31.9259 580.147ZM20.044 569.595L67.5715 485.118L162.506 442.93L162.626 442.87L210.154 358.394L305.088 316.206L305.209 316.146L352.736 231.67L447.67 189.482L447.791 189.422L495.318 104.946L590.253 62.7575L590.373 62.6979L637.901 -21.7783L732.835 -63.9667L732.956 -64.0263L742.97 -81.8317H742.006L732.308 -64.6026L637.479 -22.3943L637.358 -22.3347L589.831 62.1415L494.897 104.33L494.776 104.389L447.249 188.866L352.314 231.054L352.194 231.114L304.666 315.59L209.732 357.778L209.612 357.838L162.084 442.314L67.1498 484.502L67.0293 484.562L19.5019 569.038L0.105415 577.663V578.517L20.0139 569.674L20.044 569.595ZM55.6896 474.546L150.624 432.358L150.744 432.298L198.272 347.822L293.206 305.634L293.327 305.574L340.854 221.098L435.789 178.91L435.909 178.85L483.436 94.3739L578.371 52.1855L578.491 52.1259L626.019 -32.3502L720.953 -74.5386L721.074 -74.5983L725.155 -81.8516H724.191L720.441 -75.1745L625.507 -32.9861L625.462 -32.9067L577.934 51.5695L482.985 93.7579L482.864 93.8175L435.322 178.294L340.387 220.482L340.267 220.542L292.739 305.018L197.805 347.206L197.685 347.266L150.157 431.742L55.1776 473.93L55.0571 473.99L7.51463 558.466L0 561.805V562.659L8.14713 559.043L55.6896 474.546ZM126.86 411.254L126.981 411.194L174.508 326.718L269.443 284.53L269.563 284.47L317.09 199.994L412.025 157.806L412.145 157.746L459.673 73.2698L554.682 31.0814L554.803 31.0218L602.33 -53.4544L666.167 -81.8118H664.255L601.818 -54.0903L601.698 -54.0307L554.17 30.4455L459.236 72.6339L459.116 72.6935L411.558 157.17L316.624 199.358L316.503 199.418L268.976 283.894L174.041 326.082L173.921 326.142L126.393 410.618L31.4139 452.806L31.2934 452.866L0.0150597 508.448V510.157L31.9259 453.442L126.86 411.254ZM55.6896 601.271L103.217 516.794L198.166 474.606L198.287 474.546L245.814 390.07L340.749 347.882L340.869 347.822L388.412 263.346L483.346 221.158L483.467 221.098L530.994 136.622L625.928 94.4336L626.049 94.3739L673.576 9.89778L768.511 -32.2906L768.631 -32.3502L796.476 -81.8317H795.512L768.074 -32.9067L673.14 9.28174L673.019 9.34136L625.462 93.8175L530.527 136.006L530.407 136.066L482.879 220.542L387.945 262.73L387.824 262.79L340.282 347.266L245.348 389.454L245.227 389.514L197.7 473.99L102.75 516.178L102.63 516.238L55.0571 600.714L0.0150597 625.177V626.031L55.5691 601.35L55.6896 601.271ZM138.757 421.806L138.878 421.746L186.405 337.27L281.34 295.082L281.46 295.022L328.987 210.546L423.922 168.358L424.042 168.298L471.57 83.8219L566.504 41.6335L566.625 41.5739L614.152 -42.9023L701.752 -81.8317H699.84L613.715 -43.5183L613.595 -43.4587L566.067 41.0174L471.103 83.2058L470.982 83.2654L423.455 167.742L328.521 209.93L328.4 209.99L280.873 294.466L185.938 336.654L185.818 336.714L138.29 421.19L43.356 463.378L43.2355 463.438L0.0752972 540.144V541.853L43.868 464.014L138.757 421.806ZM79.4684 368.946L126.996 284.47L221.93 242.282L222.051 242.222L269.578 157.746L364.513 115.558L364.633 115.498L412.16 31.0218L507.095 -11.1666L507.215 -11.2262L546.942 -81.8317H545.978L506.628 -11.7826L411.694 30.4058L411.573 30.4654L364.031 114.942L269.096 157.13L268.976 157.19L221.448 241.666L126.514 283.854L126.393 283.914L78.866 368.39L0.0451778 403.404V404.259L79.3329 369.006L79.4684 368.946ZM43.8078 590.719L91.3352 506.242L186.285 464.054L186.405 463.994L233.933 379.518L328.867 337.33L328.987 337.27L376.515 252.794L471.449 210.606L471.57 210.546L519.097 126.07L614.032 83.8815L614.152 83.8219L661.755 -0.654291L756.689 -42.8427L756.81 -42.9023L778.706 -81.8317H777.742L756.162 -43.4786L661.243 -1.2902L661.122 -1.23058L613.58 83.2456L518.645 125.434L518.525 125.494L470.997 209.97L376.063 252.158L375.943 252.218L328.415 336.694L233.481 378.882L233.315 378.942L185.788 463.418L90.8382 505.607L90.7178 505.666L43.1903 590.142L0.030118 609.319V610.173L43.7023 590.778L43.8078 590.719ZM20.044 316.146L67.5715 231.67L162.506 189.482L162.626 189.422L210.154 104.946L305.088 62.7575L305.209 62.6979L352.736 -21.7783L447.67 -63.9667L447.791 -64.0263L457.805 -81.8317H456.842L447.143 -64.6026L352.269 -22.3943L352.149 -22.3347L304.621 62.1415L209.672 104.33L209.551 104.389L162.024 188.866L67.0896 231.054L66.9691 231.114L19.4417 315.59L0.0451778 324.214V325.069L19.9537 316.226L20.044 316.146ZM43.8078 83.8219L91.3503 -0.654291L186.3 -42.8427L186.42 -42.9023L208.317 -81.8317H207.353L185.773 -43.4786L90.8382 -1.2902L90.7027 -1.23058L43.1753 83.2654L0.0150597 102.442V103.296L43.6873 83.9014L43.8078 83.8219ZM67.5715 104.946L115.099 20.4697L210.033 -21.7187L210.154 -21.7783L243.932 -81.8317H242.968L209.536 -22.3546L114.602 19.8338L114.481 19.8934L66.939 104.37L0.0150597 134.118V134.973L67.451 105.005L67.5715 104.946ZM79.4684 115.498L126.996 31.0218L221.93 -11.1666L222.051 -11.2262L261.777 -81.8317H260.814L221.433 -11.7826L126.484 30.4058L126.363 30.4654L78.8208 114.942L0 149.956V150.811L79.3178 115.558L79.4684 115.498ZM55.6896 94.3739L103.217 9.89778L198.166 -32.2906L198.287 -32.3502L226.132 -81.8317H225.168L197.639 -32.9067L102.72 9.28174L102.6 9.34136L55.0571 93.8175L0.0150597 118.28V119.135L55.5691 94.4534L55.6896 94.3739ZM91.3503 126.07L138.878 41.5937L233.812 -0.594677L233.933 -0.654291L279.608 -81.8118H278.644L233.315 -1.23058L138.366 40.9578L138.245 41.0174L90.7027 125.494L0 165.794V166.649L91.1997 126.13L91.3503 126.07ZM60.1171 -81.8317H58.2045L19.532 -64.6423L19.4116 -64.5827L0.0150597 -30.1246V-28.4156L20.044 -64.0263L60.1171 -81.8317ZM131.423 -81.8317H129.511L43.2957 -43.5183L43.1753 -43.4587L0.0150597 33.2475V34.9565L43.8078 -42.8824L131.423 -81.8317ZM95.7626 -81.8317H93.8501L31.4139 -54.0903L31.2934 -54.0307L0.0150597 1.57138V3.28038L31.9259 -53.4544L95.7626 -81.8317ZM103.097 136.682L103.217 136.622L150.744 52.1458L245.679 9.95739L245.799 9.89778L293.327 -74.5784L309.636 -81.8317H307.724L292.83 -75.2143L292.709 -75.1547L245.182 9.32149L150.248 51.5099L150.127 51.5695L102.585 136.066L7.65017 178.234L7.52969 178.294L0.0150597 191.648V193.357L8.16219 178.87L103.097 136.682ZM31.9259 73.2698L79.4684 -11.2262L174.403 -53.4146L174.523 -53.4742L190.486 -81.8317H189.522L173.876 -54.0307L78.9564 -11.8423L78.8359 -11.7826L31.2934 72.6935L0.0150597 86.5841V87.4386L31.8054 73.3095L31.9259 73.2698ZM138.757 168.358L138.878 168.298L186.405 83.8219L281.34 41.6335L281.46 41.5739L328.987 -42.9023L416.588 -81.8317H414.675L328.475 -43.5382L328.355 -43.4786L280.827 40.9976L185.893 83.186L185.773 83.2456L138.245 167.742L43.3108 209.93L43.1903 209.99L0.030118 286.696V288.405L43.8228 210.566L138.757 168.358ZM114.978 147.234L115.099 147.174L162.626 62.6979L257.561 20.5095L257.681 20.4499L305.209 -64.0263L345.282 -81.8317H343.369L304.697 -64.6423L304.576 -64.5827L257.049 19.8934L162.129 62.0818L162.009 62.1415L114.466 146.618L19.532 188.806L19.4116 188.866L0.0150597 223.344V225.053L20.044 189.442L114.978 147.234ZM126.86 157.806L126.996 157.746L174.538 73.2698L269.473 31.0814L269.593 31.0218L317.121 -53.4544L380.957 -81.8118H379.045L316.609 -54.0704L316.488 -54.0108L268.961 30.4654L174.026 72.6538L173.906 72.7134L126.363 157.17L31.4139 199.358L31.2934 199.418L0.0150597 255V256.709L31.9259 199.994L126.86 157.806ZM20.044 62.6979L67.5715 -21.7783L162.506 -63.9667L162.626 -64.0263L172.641 -81.8317H171.677L161.979 -64.6026L67.0745 -22.3943L66.954 -22.3347L19.4116 62.1415L0.0150597 70.7659V71.6204L19.9236 62.7773L20.044 62.6979ZM55.6896 -32.3304L150.639 -74.5188L150.76 -74.5784L154.841 -81.8317H153.877L150.127 -75.1547L55.1776 -32.9663L55.0571 -32.9067L7.52969 51.5695L0.0150597 54.908V55.7625L8.16219 52.1458L55.6896 -32.3304ZM91.3503 379.498L138.878 295.022L233.812 252.834L233.933 252.774L281.475 168.298L376.409 126.11L376.53 126.05L424.057 41.5739L519.007 -0.614546L519.127 -0.674159L564.802 -81.8317H563.839L518.51 -1.23058L423.575 40.9578L423.455 41.0174L375.928 125.494L280.978 167.682L280.858 167.742L233.33 252.218L138.396 294.406L138.275 294.466L90.7027 378.942L0 419.243V420.097L91.1997 379.578L91.3503 379.498Z'
                fill='#0F3C44'
              />
            </svg> */}
            <h1 className='home_info--titl e fw-bold fs-primary-heading text-primary-200'>
              <span class='text-accent-heading '> Jeunesse Resiliente</span>{' '}
              <br />
              Un monde Resilient
            </h1>

            <div className='home_info--body text-primary-200 fs-section'>
              Pathfinder Burundi aide les jeunes a avoir acces a une sante
              sexuelle et reproductive saine. Rejoignez la communaute des jeunes
              PI pour beneficier de l'education et services en sante sexuelle et
              reproductive
            </div>

            <div className='home_info--action d-flex'>
              <div className='action_a bg-button'>
                {' '}
                <Link to='/'> Rejoignez la communaute </Link>{' '}
              </div>
              <div className='action_b'>
                <Link to='/cdsList'>
                  <span className='mr-2'> CDS jeunes</span>{' '}
                  <Hospital size={48} />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-5 home__img'></div>
        </div>

        <div className='container-fluid methodes padding-block-big'>
          {/* <div className=" bg-danger position-relative top-0 w-25">

<h4> Les Methodes de contraception</h4> 

</div>     */}

          <div className=' row bg-body-primary '>
            <div className='col-md-7 contra'>
              <img
                src='/contra_component.png'
                alt=''
                className='component mb-2'
              />

              <div className='text-primary-100 mt-4 w-70 fs-section '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam quas nobis itaque mollitia aut corporis praesentium
                libero doloribus tempore, facere ut alias, cum commodi voluptas
                tempora rerum, perspiciatis expedita. Blanditiis impedit
                consectetur cum non unde fugiat magnam repudiandae,
              </div>
            </div>

            {/* Methodes  */}

            <Methodes />
          </div>

          <Activites />

          {cds.data ? (
            <div className=' row bg-dark p-4'>
              {cds.map((elt) => (
                <div className='col-md-4'>
                  {' '}
                  <Cds data={elt} />
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <div className='row mt-4 mb-4 border-primary'>
            <div className='col-md-4 bg-primary p-2 cdsagent'>
              {/* <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img" /> */}
            </div>

            <div className='col-md-8 text-dark bg-white p-3'>
              <div className='text-muted fs-section'>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat alias, suscipit iusto nam culpa corporis possimus illo
                quam est! Iusto deleniti provident accusamus asperiores fugiat,
                nihil autem eveniet corporis eligendi dolor minus optio expedita
                deserunt repellat! A, ipsa harum? Enim itaque nemo aliquam nam
                harum illo porro suscipit accusamus culpa, error vero, nostrum
                in iusto? Hic optio omnis rem laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home

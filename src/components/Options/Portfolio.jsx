import { Doughnut } from 'react-chartjs-2';
// import React, {useState, useEffect, useRef} from "react";
import React, {useState, useEffect, useRef} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {RingSpinner} from "react-spinners-kit";
// import { useScrollBy } from "react-use-window-scroll";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const override = css`
//   display: block;
//   margin: 50pxpx;
//   padding-left: 50%;
// `;

function Portfolio() {
    const [loading, setLoading] = useState(false);
    // const inputElement = useRef();
    // window.scrollTo(0,document.body.scrollHeight);
    const testRef = useRef(null);
    const scrollToElement = () => testRef.current.scrollIntoView();


    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true)
          }, 5000)

          return () => clearTimeout(timeout)
      
        }, [loading])

        
        if (!loading) return(<center><RingSpinner size={60} color="#a11d24" loading={true} /></center>)
    return (<div ref={testRef}><center>
                    <Doughnut
                        onLoad={scrollToElement}
                        width={300}
                        height={300}
                        data={{
                            labels: ['Stocks', 'Mutual Funds', 'Debt', 'Cash'],
                            datasets: [
                                {
                                    label: 'Asset allocation',
                                    data: [19, 31, 40, 10],
                                    backgroundColor: ['#711116',
                                        '#9C0815',
                                        '#b8333a',
                                        '#c26066'
                                    ],
                                    hoverOffset: 30,
                                    borderColor: ['#000000',
                                        '#000000',
                                        '#000000',
                                        '#000000'
                                    ],
                                    borderWidth: 0.1,
                                },
                            ]
                        }}
                        options={{
                            radius: '90%',
                            responsive: false,
                            legend: {
                                position: 'Right',
                            },
                            animation: {
                                animateScale: true,
                                animateRotate: true
                            },
                            title: {
                                text: 'Asset Allocation',
                                display: true
                            },
                            plugins: {
                                datalabels: {
                                  color: "#ffffff",
                                  formatter: function (value) {
                                    return Math.round(value) + '%';
                                  },
                                  font: {
                                    weight: 'bold',
                                    size: 12,
                                  }
                                }
                              },
                        }}
                    /></center></div>
            );    
  }

export default Portfolio;
import { Doughnut } from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {RingSpinner} from "react-spinners-kit";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const override = css`
//   display: block;
//   margin: 50pxpx;
//   padding-left: 50%;
// `;

function Portfolio() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true)
          }, 5000)
      
          return () => clearTimeout(timeout)
      
        }, [loading])

        if (!loading) return(<center><RingSpinner size={60} color="#a11d24" loading={true} /></center>)
    return (<div><center>
                    <Doughnut
                        width={350}
                        height={350}
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
                                    size: 16,
                                  }
                                }
                              },
                        }}
                    /></center>
                    </div>
            );
    
  }
export default Portfolio;
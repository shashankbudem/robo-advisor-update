import { Doughnut } from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const override = css`
  display: block;
  margin: 50pxpx;
`;

function Portfolio() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    return (
        <div className="App">
            {
                loading ?

                    <ClipLoader color={"#aa131c"} loading={loading} size={60} css={override} />
                    :
                    <Doughnut
                        width={400}
                        height={400}
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
                    />

            }
        </div>);
    
  }
export default Portfolio;
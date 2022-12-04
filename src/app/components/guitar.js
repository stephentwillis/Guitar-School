import React, { useState, useEffect, useRef } from 'react';

import config from '../../config';
// -- Imports

const Guitar = ({frets, shape, mode, type}) => {

    /* #region Objects */
    /* #endregion */

    /* #region State hooks */
    const [FretArr, SetFretArr] = useState([]);

    useEffect(() => {
        let arr = [];
        let i = 0;

        while (i <= frets) {
            arr.push(i);

            i++;
        }

        console.info(arr);

        SetFretArr(arr);
    }, [, frets]);
    /* #endregion */

    /* #region Event Handlers */
    /* #endregion */

    /* #region Methods */
    /* #endregion */

    /* #region Render */
    return(
        <>
        <section className="container mb-5 ps-5 pe-5 guitar">

            <div className="row mb-1 guitar__legend text-center">
                <div className="col-1 text-end">Fret:</div>

                <div className="col-5 col-md-11">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                    <div className="col">{i}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="e" className="row guitar__string-group guitar__string-first">
                <div className="col-1 text-end guitar__string-label guitar__legend">e</div>

                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="B" className="row guitar__string-group guitar__string-second">
                <div className="col-1 text-end guitar__string-label guitar__legend">B</div>
                
                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="G" className="row guitar__string-group guitar__string-third">
                <div className="col-1 text-end guitar__string-label guitar__legend">G</div>
                
                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="D" className="row guitar__string-group guitar__string-fourth">
                <div className="col-1 text-end guitar__string-label guitar__legend">D</div>
                
                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="A" className="row guitar__string-group guitar__string-fifth">
                <div className="col-1 text-end guitar__string-label guitar__legend">A</div>
                
                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>

            <div id="E" className="row guitar__string-group guitar__string-sixth">
                <div className="col-1 text-end guitar__string-label guitar__legend">E</div>
                
                <div className="col-5 col-md-11">
                    <div className="row guitar__string">
                        <div className="col">
                            <div className="row">
                                { FretArr.map((f, i) => (
                                <div className={`col guitar__fret guitar__fret-${i}`} key={i}>
                                    <div className="row">
                                        <div className="col-1"><hr /></div>
                                        <div className="col"><hr /></div>
                                        <div className="col-1"><hr /></div>
                                    </div>
                                </div>
                                ))}
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
    /* #endregion */
};

export default Guitar;
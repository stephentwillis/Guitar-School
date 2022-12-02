// Imports
import React, { useState, useEffect, useRef } from 'react';

import config from '../../config';
// -- Imports

const IntroductionContainer = () => {

    /* #region Objects */
    /* #endregion */

    /* #region State hooks */
    /*  #endregion */

    /* #region Event Handlers */
    /*  #endregion */

    /* #region Methods */
    /*  #endregion */

    /* #region Render */
    return (
        <>
        <section className="row mb-5">
            <h1 className="mb-5">Introduction to Fingerboard Intervals</h1>

            <article className="col-6">
                { config.degrees.map((d) => (
                <div className="row" key={d.degree}>
                    <div className="col-1">
                        <strong>{d.degree}</strong>
                    </div>

                    <div className="col-11">
                        <strong>{d.name}</strong>
                    </div>
                </div>
                ))}
            </article>

            <article className="col-6">
                <h2 className="mb-3">The Western Octave</h2>

                <p>
                    The Octave is given to us by physics. It is defined as the space between two pitches, whose frequency ratio is two to one. What happens to that interval is determined by man. Western culture has divided the octave into twelve equal increments. Each of which spans a different interval to the root and is named for its relationship with the root. 
                    <br />
                    <br />
                    In addition to the octave itself, physics also provides overtones which govern how one pitch will sound with another. Each one of the intervals on the left has a unique musical signature, and you have a subliminal awareness of every one. 
                    <br />
                    <br />
                    The laws of harmony are a study of what happens when we hear music.  We all instinctively recognize what sounds right or wrong because there is an apparent truth in music that does not need to be proven, just understood.
                </p>
            </article>
        </section>

        <section className="row">
            <article className="col">
                <p>
                    First there were Modes. Named after Greek tribes, each spans an octave using seven notes and has its own unique sound. Several of the modes became our modern Major and minor scales, while others feature in many forms of traditional and modern music. 
                    <br />
                    <br />
                    The purpose of a scale or mode is to select seven notes from the twelve available in any octave. Diatonic harmony calls for all elements of a given piece to be created using only the notes contained in the chosen scale.  When we observe the rules, the result is always safe consonant music. 
                    <br />
                    <br />
                    The History of music is a record of how the rules were stretched, broken, and eventually re-defined. When no rules are observed, the result is musical chaos. Harmony still conforms to the traditional laws because they explain the way we hear consonance, dissonance, tension and resolution.
                </p>
            </article>
        </section>
        </>
    );
    /*  #endregion */
}

export default IntroductionContainer;
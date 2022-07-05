import React from 'react';
import { ReachUsButton } from './ReachUsButton';

export function Plant() {

  return (
    <>
      <section className='container-fluid layer10'>
        <div className="row layer10Row">
          <div>
            <div>
              <h1 className='anyText'>Any Potential SMEs Aiming To Grow <br /><span className='nationalText'>National & International</span> <br />Can Benefit Here.</h1>
            </div>

            <div className='ms-1'>
              <ReachUsButton />
            </div>

          </div>


        </div>
      </section>
    </>
  );
}

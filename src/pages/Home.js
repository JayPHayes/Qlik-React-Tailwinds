import React from 'react'
import {
    QdtSelections, QdtSelect, QdtPicasso, useBarChartSettings,
} from 'qdt-components';
import QdtComponent from '../components/QdtComponent';


function Home() {
    return (
        <div>
            <h1 className="text-3xl mb-4 text-gray-600">Home Page - KPI Dashboard: Margins</h1>
            
            {/* **** Card **** */}
            <div className="grid grid-cols-1 gap-2 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-2 
                xl:grid-cols-2 
                mt-3" >
                {/* *** Dashboard 01 *** */}
                <div className="bg-gray-100 border-2 rounded py-4 px-2">

                    <QdtComponent
                        options={{
                            id: 'JRNGq',
                            height: 200,
                        }}
                        appIndex={2}
                    />
                </div>
                {/* *** Dashboard 02 *** */}
                <div className="bg-gray-100 border-2 rounded py-4 px-2">
                    <QdtComponent
                        options={{
                            id: 'cXahBQ',
                            height: 200,
                        }}
                        appIndex={2}
                    />
                </div>

            </div>
            

            <div className="grid grid-cols-1 gap-2 
                sm:grid-cols-1 
                md:grid-cols-1 
                lg:grid-cols-1 
                xl:grid-cols-1 
                mt-3" >
                {/* *** Dashboard 03 *** */}
                <div className="border-2 py-4 px-2">
                    <QdtComponent
                        options={{
                            id: 'fxyuxvp',
                            height: 400,
                        }}
                        appIndex={2}
                    />
                </div>
            </div>



        </div>
    )
}

export default Home

import {
    QdtSelections, QdtSelect, QdtPicasso, useBarChartSettings,
} from 'qdt-components';
import QdtComponent from '../components/QdtComponent';

function Dashboard03() {
    return (
        <div>
            <h1 className="text-3xl mb-4 text-gray-600">Dashboard 3 -Sales and Margin Performance %</h1>

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
                            id: 'XNTGgf',
                            height: 400,
                        }}
                        appIndex={2}
                    />
                </div>
                {/* *** Dashboard 02 *** */}
                <div className="bg-gray-100 border-2 rounded py-4 px-2">
                    <QdtComponent
                        options={{
                            id: 'YzxGRem',
                            height: 400,
                        }}
                        appIndex={2}
                    />
                </div>

            </div>
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
                            id: 'jujzX',
                            height: 300,
                        }}
                        appIndex={2}
                    />
                </div>
                {/* *** Dashboard 02 *** */}
                <div className="bg-gray-100 border-2 rounded py-4 px-2">
                    <QdtComponent
                        options={{
                            id: 'mkQXr',
                            height: 300,
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
                            id: 'ferLVj',
                            height: 400,
                        }}
                        appIndex={2}
                    />
                </div>
            </div>



        </div>
    )
}

export default Dashboard03

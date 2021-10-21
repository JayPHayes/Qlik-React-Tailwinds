import {
    QdtSelections, QdtSelect, QdtPicasso, useBarChartSettings,
} from 'qdt-components';
import QdtComponent from '../components/QdtComponent';

function Dashboard05() {
    return (
        <div>
             <h1 className="text-3xl mb-4 text-gray-600">Dashboard 3 -Sales and MArgin Performance %</h1>

             
             <QdtComponent
                component={QdtPicasso}
                options={{
                settings: useBarChartSettings({
                    orientation: 'horizontal',
                    // box: { properties: { brush: null } },
                }),
                height: 400,
                }}
                properties={{
                qHyperCubeDef: {
                    qDimensions: [
                    { qDef: { qFieldDefs: ['Product Sub Group Desc'] } },
                    ],
                    qMeasures: [
                    { qDef: { qDef: 'Avg([Sales])', autoSort: false }, qSortBy: { qSortByNumeric: -1 } },
                    ],
                    qInterColumnSortOrder: [1, 0],
                },
                }}
            />
        </div>
    )
}

export default Dashboard05

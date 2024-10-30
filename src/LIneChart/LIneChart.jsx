import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';


const LIneChart = () => {

    const subjectMarksData = [
        { "id": 1, "name": "Student A", "mathMarks": 78, "physicsMarks": 82, "chemistryMarks": 76 },
        { "id": 2, "name": "Student B", "mathMarks": 85, "physicsMarks": 79, "chemistryMarks": 88 },
        { "id": 3, "name": "Student C", "mathMarks": 90, "physicsMarks": 91, "chemistryMarks": 84 },
        { "id": 4, "name": "Student D", "mathMarks": 62, "physicsMarks": 68, "chemistryMarks": 70 },
        { "id": 5, "name": "Student E", "mathMarks": 74, "physicsMarks": 75, "chemistryMarks": 78 },
        { "id": 6, "name": "Student F", "mathMarks": 88, "physicsMarks": 85, "chemistryMarks": 89 },
        { "id": 7, "name": "Student G", "mathMarks": 93, "physicsMarks": 89, "chemistryMarks": 92 },
        { "id": 8, "name": "Student H", "mathMarks": 69, "physicsMarks": 71, "chemistryMarks": 67 },
        { "id": 9, "name": "Student I", "mathMarks": 80, "physicsMarks": 76, "chemistryMarks": 82 },
        { "id": 10, "name": "Student J", "mathMarks": 76, "physicsMarks": 72, "chemistryMarks": 74 }
      ]
      
    
      

    return (
        <div>
            <LChart width={800} height={500} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="chemistryMarks" stroke='red'></Line>
                <Line dataKey="mathMarks" stroke='green'></Line>
                <Line dataKey='physicsMarks' stroke='yellow'></Line>
            </LChart>
        </div>
    );
}

export default LIneChart;
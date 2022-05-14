import { Formik, Form, Field, FieldArray } from 'formik';
import { CreatePredictionCall } from '../services/PredictionService';



export default function CreatePrediction() {

    interface PredictionRequest {
        title: string;
        options: OptionRequest[]
    }
    
    interface OptionRequest {
        value: string;
    }

    function parsePrediction(values: any) {
        let request: PredictionRequest = {title: values.title, options: []};
        values.options.map((option: string) => {
            const optionRequest: OptionRequest = {value: option}
            request.options.push(optionRequest);
        });
        return request;
    }
    return (
        <div>
            <Formik
                initialValues={
                    {   
                        title: '',
                        options: ['']
                    }
                }
                onSubmit={values => {
                    const requestData = parsePrediction(values);
                    console.log(requestData);
                    CreatePredictionCall(requestData).then(response => {
                        console.log(response);
                    });

                }}
            >
                {({values}) => (
                    <Form>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Prediction title
                        </label>
                        <Field name="title" as="textarea" className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        <FieldArray
                            name="options"
                            render={arrayHelpers => (
                                <div>
                                    {
                                        values.options.map((option, index) => (
                                            <div key={index}>
                                                <label className="block text-gray-700 text-sm font-bold mb-2">Option: {index + 1}</label>
                                                <Field name={`options.${index}`} className="shadow mr-5 appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.remove(index)}
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        ))
                                    }
                                    <button type="button" className="bg-white-500 hover:bg-gray-100 outline mt-5 text-blue-500 font-bold py-2 px-4 rounded focus:outline focus:shadow-outline" onClick={() => arrayHelpers.push('')}>
                                        Add option
                                    </button>
                                    <div>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white mt-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                                    </div>
                                </div>
                            )}
                        />
                    </Form>
                )}
            </Formik>
        </div>
    )
    
}
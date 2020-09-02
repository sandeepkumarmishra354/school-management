import { Schema } from "rsuite";

export const FeeFormModel = {
    newEntry: Schema.Model({
        studentId: Schema.Types.StringType().isRequired('Please select student'),
        month: Schema.Types.DateType().isRequired('Please select month'),
        dueAmount: Schema.Types.NumberType().isInteger('Amount must be integer').isRequired('Please enter due amount'),
        paidAmount: Schema.Types.NumberType().isInteger('Amount must be integer').isRequired('Please enter paid amount'),
        message: Schema.Types.StringType()
    })
}
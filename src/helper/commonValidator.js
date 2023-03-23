import * as Yup from 'yup';

export const validatorEmail = (value) => {
	const validationSchema = Yup.string()
		.required('Trường này không được bỏ trống')
		.email('Email không hợp lệ');

	return validationSchema.validate(value)
		.catch(error => Promise.reject(error.message));
};

const MIN_PASSWORD = 6;
export const validatorPassword = (value) => {
	if (value.length < MIN_PASSWORD) {
		return Promise.reject("Mật khẩu phải trên 6 kí tự");
	}
	return Promise.resolve();
}

export const validatorSelect = (value, array) => {
	const validationSchema = Yup.mixed()
		.oneOf(array, "Giá trị không hợp lệ")

	return validationSchema.validate(value)
		.catch(error => Promise.reject(error.message));
}
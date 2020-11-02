import React, {FC} from 'react';
import {Field, Formik} from 'formik';
import {FilterType} from '../../redux/usersReducer';

const UserSearchValidate = (values: any) => {
    const errors = {};
    return errors;
};

type PropsTypes = {
    onFilterChanged: (filter: FilterType) => void
    filter: FilterType
}

type FriendFormType = 'true' | 'false' | 'null'

type FormType = {
    term: string
    friend: FriendFormType
}

const UsersSearch: FC<PropsTypes> = ({...props}) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (setSubmitting: boolean) => void }) => {

        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        };

        props.onFilterChanged(filter);
        setSubmitting(false);
    };

    return (
        <div>
            <Formik enableReinitialize
                    initialValues={{term: props.filter.term, friend: String(props.filter.friend) as FriendFormType}}
                    validate={UserSearchValidate}
                    onSubmit={submit}>
                {({isSubmitting, values, handleBlur, handleSubmit, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               onChange={handleChange}
                               value={values.term}
                               onBlur={handleBlur}
                               name="term"/>

                        <Field name="friend" as="select"
                               onBlur={handleBlur}
                               value={values.friend}>
                            <option value="null">All</option>
                            <option value="true">Only friends</option>
                            <option value="false">Only unfolowed</option>
                        </Field>
                        <button type="submit"
                                style={{cursor: 'pointer'}}
                                disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
};

export default UsersSearch;

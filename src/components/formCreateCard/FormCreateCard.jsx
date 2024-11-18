import './FormCreateCard.css';
// import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormCreateCard() {
    const {register, handleSubmit, formState : {errors}} = useForm({
        defaultValues: {
            fronttext: "",
            backtext: ""
        }
    });
    

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div className='form__item'>
            <label htmlFor='fronttext'>
                Передняя сторона карточки:
                </label>
                <input 
                type="text" 
                name="fronttext" 
                id='fronttext' 
                {...register("fronttext", 
                {
                    required: "Заполните поле Передняя сторона карточки",
                    minLength: {
                        value: 3,
                        message: "Название карточки должно содержать минимум 3 символа"
                    }
                }
                )} />
                <p className='error-msg'>{errors.fronttext?.message}</p>
            </div>

            <div className="form__item">
            <label htmlFor="backtext">
                Задняя сторона карточки:
                </label>
                <input 
                type="text" 
                name="backtext" 
                id="backtext"
                {...register("backtext",
                {
                    required: "Заполните поле Задняя сторона карточки",
                    minLength: {
                        value: 3,
                        message: "Название карточки должно содержать минимум 3 символа"
                    }
                })} />
                <p className='error-msg'>{errors.backtext?.message}</p>

                </div>

                <div className='form__item'>
                <input type="submit" value="Создать карточку" />
                </div>
        </form>
    )
}
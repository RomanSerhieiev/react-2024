import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { userValidator } from '../../validators/user.validator';
import { IUser } from '../../interfaces/user.interface';
import { userService } from '../../services/user.service';

const User: FC = () => {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm<Partial<IUser>>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const submitHandler = async (user: Partial<IUser>) => {
        await userService.create(user);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register("name")} />
                    {errors.name && <span>{errors.name.message}</span>}
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" {...register("username")} />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email")} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>
                <div>
                    <label>Street</label>
                    <input type="text" {...register("address.street")} />
                    {errors.address?.street && <span>{errors.address?.street.message}</span>}
                </div>
                <div>
                    <label>Suite</label>
                    <input type="text" {...register("address.suite")} />
                    {errors.address?.suite && <span>{errors.address?.suite.message}</span>}
                </div>
                <div>
                    <label>City</label>
                    <input type="text" {...register("address.city")} />
                    {errors.address?.city && <span>{errors.address?.city.message}</span>}
                </div>
                <div>
                    <label>Zipcode</label>
                    <input type="text" {...register("address.zipcode")} />
                    {errors.address?.zipcode && <span>{errors.address?.zipcode.message}</span>}
                </div>
                <div>
                    <label>Lat</label>
                    <input type="text" {...register("address.geo.lat")} />
                    {errors.address?.geo?.lat && <span>{errors.address?.geo?.lat.message}</span>}
                </div>
                <div>
                    <label>Lng</label>
                    <input type="text" {...register("address.geo.lng")} />
                    {errors.address?.geo?.lng && <span>{errors.address?.geo?.lng.message}</span>}
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" {...register("phone")} />
                    {errors.phone && <span>{errors.phone.message}</span>}
                </div>
                <div>
                    <label>Website</label>
                    <input type="text" {...register("website")} />
                    {errors.website && <span>{errors.website.message}</span>}
                </div>
                <div>
                    <label>Company Name</label>
                    <input type="text" {...register("company.name")} />
                    {errors.company?.name && <span>{errors.company?.name.message}</span>}
                </div>
                <div>
                    <label>Catch Phrase</label>
                    <input type="text" {...register("company.catchPhrase")} />
                    {errors.company?.catchPhrase && <span>{errors.company?.catchPhrase.message}</span>}
                </div>
                <div>
                    <label>BS</label>
                    <input type="text" {...register("company.bs")} />
                    {errors.company?.bs && <span>{errors.company?.bs.message}</span>}
                </div>
                <button disabled={!isValid} type="submit">Create User</button>
            </form>
        </div>
    );
};

export default User;
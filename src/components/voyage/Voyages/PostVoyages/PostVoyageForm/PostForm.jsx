import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
// import TestInput from './Test';

const PostForm =(props)=>{
    const [location, setLocation] = useState('');
    const [season, setSeason] = useState('');
    const [stay, setStay] = useState('');
    const [food, setFood] = useState('');
    const [rating, setRating] = useState('');
    // console.log("PostFrom Token:", props.token)

    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch('http://localhost:3050/voyage/createlog',{
            method: 'POST',
            body: JSON.stringify({location, season, stay, food, rating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res)=> res.json())
        .then((postVoyage)=>{
            console.log(postVoyage);
            setLocation('');
            setSeason('');
            setStay('');
            setFood('');
            setRating('');
        })
    }

    return(
        <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor='location'>Location</Label>
                    <Input name='location' value={location} onChange={(e)=>setLocation(e.target.value)} />
                    {/* <TestInput name='location' value={location} onChange={(e)=>setLocation(e.target.value)} /> */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='season'>Season</Label>
                    <Input type='select' name='season' value={season} onChange={(e)=>setSeason(e.target.value)}>
                        <option></option>
                        <option value='Summer'>Summer</option>
                        <option value='Fall'>Fall</option>
                        <option value='winter'>Winter</option>
                        <option value='Spring'>Spring</option>
                    </Input>
                </FormGroup>
                <FormGroup tag='fieldset'>
                    <Label htmlFor='stay'>Stay</Label>
                    <Input name='stay' value={stay} onChange={(e)=>setStay(e.target.value)} />
                    {/* <Label><Input name='stay' value={'testInput'} type='checkbox' onChange={(e)=>setStay(stay +', '+ e.target.value)} />test Checkbox</Label> */}
                </FormGroup>
                <FormGroup>
                    <Label htmlFor='food'>Food</Label>
                    <Input name='food' value={food} onChange={(e)=>setFood(e.target.value)} />
                </FormGroup>
                <FormGroup tag='fieldset'>
                    <legend>Rating</legend>
                    <FormGroup>
                        <Label htmlFor='rating'>
                            <Input type='radio' name='rating' value={1} onChange={(e)=>setRating(e.target.value)} />
                            1
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>
                            <Input type='radio' name='rating' value={2} onChange={(e)=>setRating(e.target.value)} />
                            2
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>
                            <Input type='radio' name='rating' value={3} onChange={(e)=>setRating(e.target.value)} />
                            3
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>
                            <Input type='radio' name='rating' value={4} onChange={(e)=>setRating(e.target.value)} />
                            4
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='rating'>
                            <Input type='radio' name='rating' value={5} onChange={(e)=>setRating(e.target.value)} />
                            5
                        </Label>
                    </FormGroup>
                </FormGroup>
                <Button type='submit'>Send Me On My Way</Button>
            </Form>
    )
}

export default PostForm;
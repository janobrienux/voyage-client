import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';

const PostForm =()=>{
    const [location, setLocation] = useState('');
    const [season, setSeason] = useState('');
    const [stay, setStay] = useState('');
    const [food, setFood] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        fetch('http://localhost:3010/voyage/createlog',{
            method: 'POST',
            body: JSON.stringify({location,season,stay,food,rating}),
            headers: new Headers({
                'Content-Type': 'application/json'
                // 'Athorization': props.token
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
                <FormGroup>
                    <Label htmlFor='stay'>Stay</Label>
                    <Input name='stay' value={stay} onChange={(e)=>setStay(e.target.value)} />
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
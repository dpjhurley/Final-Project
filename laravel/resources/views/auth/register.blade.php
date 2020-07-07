@extends('layouts.layout')
 
@section('content')
 
    @if($errors->count())
 
        @foreach($errors->all() as $error)
            <div class="alert-danger">{{ $error }}</div>
        @endforeach
 
    @endif
 
    <form action="{{ route('register') }}" method="post">
        @csrf
        
        <div class="form-group">
            <label for="">First name</label><br>
            <input class="form-control" type="text" name="name" value="{{ old('first_name') }}" />
        </div>
 
        <div class="form-group">
            <label for="">Surname</label><br>
            <input class="form-control" type="text" name="surname" value="{{ old('surname') }}" />
        </div>

        <div class="form-group">
            <label for="">Email</label><br>
            <input class="form-control" type="email" name="email" value="{{ old('email') }}" />
        </div>

        <div class="form-group">
            <p>What Shoes are you interested in?</p>
            <label for="">Male</label>
            <input type="radio" name="gender" value="male" />
            <label for="">Female</label>
            <input type="radio" name="gender" value="female" />
        </div>

        <div class="form-group">
            <label for="">Date of birth</label><br>
            <input class="form-control" type="date" name="date_of_birth" value="{{ old('date_of_birth') }}" />
        </div>    

        <div class="form-group">
            <label for="">Password</label><br>
            <input class="form-control" type="password" name="password" value="" />
        </div>
 
        <div class="form-group">
            <label for="">Confirm password</label><br>
            <input class="form-control" type="password" name="password_confirmation" value="" />
        </div>
        
        <div class="form-group">
            <input type="checkbox" name="mailing_list" id="">
            <label for="">If you would like to receive regular emails featuring new styles, sale updates and great competitions, tick this box.</label>
        </div>
 
        <button type="submit" class="btn btn-primary">Sign up</button>
 
    </form>
 
@endsection 

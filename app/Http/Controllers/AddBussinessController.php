<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use app\Http\controller\AddBussinessController;

class AddBussinessController extends Controller
{
    
    function store(Request $request){
        $request->validate([
            "name"=> "required|max:120",
            "address"=> "required|max:1000",
            "email"=> "required|max:120",
            "website" => "required|max:120",
            "contactPersonName"=> "required|max:120",
            "phoneNumber"=> "required|max:120",
        ]);

        redirect()->back()->with([
            "message"=> "Bussiness store successfully",
            "type"=> "success",
        ]);
    }
}

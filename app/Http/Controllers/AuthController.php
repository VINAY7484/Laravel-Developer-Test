<?php
 
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\rules;
 
class AuthController extends Controller
{
    /**
     * Handle an authentication attempt.
     */
    public function authenticate(Request $request): RedirectResponse
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return redirect()->to('/');
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
    public function store(RegisterUserRequest $request): RedireactResponse
    {
        // $request->validate([
        //     'name'=>'required|string|max:255',
        //     'email'=>'required|string|email|max:255|unique:' .user::class,
        //     'password'=>['required','confirmed', Rules\Password::defaults()],
        // ]);

$payload=$request->validated();

        $user = User::create([
            // 'name'=>$request -> name,
            // 'email'=>$request -> email,
            // 'password'=> Hash ::make ($request -> password),
            'name'=>$payload["name"],
            'email'=>$payload ["email"],
            'password'=> Hash ::make ($payload ["password"]),
        ]);

        event(new Registered($user));

        Auth::Login($user);

        return redirect()->to("/");
    }

    public function destroy(Request $request): RedirectResponse{
        Auth::gard("web")->logout()

        $request->session()->invalidate();
        $request->session()->regenrateToken();

        return redirect("/");
    }
}
<?php
/*
validation
php artisan make:request CompanyRequest

We use those API Resource and Form Request classes inside of our app/Http/Controllers/API/CompanyController.php
 */
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email'],
            'address' => ['nullable', 'string'],
            'website' => ['nullable', 'url'],
        ];
    }
}

<?php
/*
API resources to transform data
https://laravel.com/docs/master/eloquent-resources

php artisan make:resource CompanyResource
 */
namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    public function toArray($request)
    {
        return parent::toArray($request);
    }
}

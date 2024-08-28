<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class UserCrudResource extends JsonResource
{
    public static $wrap = false; // disable the wrap to display the output from the db

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // retrieve only these detail
        return [
            "id" => $this->id,
            "name" => $this->name,
            "email" => $this->email,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d H:i:s'),
        ];
    }
}

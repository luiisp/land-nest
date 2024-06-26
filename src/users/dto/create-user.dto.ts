import { IsString, IsEmail, MinLength, MaxLength, min } from "class-validator";

export class CreateUserDto {
    @IsString() @MinLength(4) @MaxLength(20)
    name: string;

    @IsString() @MinLength(4) @MaxLength(20)
    username: string;
    
    @IsEmail()
    email: string;
    
    @IsString() @MinLength(8) @MaxLength(20)
    password: string;

}

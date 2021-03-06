import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PostsModule } from 'src/posts/posts.module';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports : [
    JwtModule.register({
      secret : process.env.JWT_SECRET_KEY || 'SECRET_123_45',
      signOptions : {expiresIn : '24h'}
    }), forwardRef(() => UsersModule)//, forwardRef(() => PostsModule) 
  ],
  exports : [AuthService, JwtModule]
})
export class AuthModule {}

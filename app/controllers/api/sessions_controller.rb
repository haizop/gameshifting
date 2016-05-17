class SessionsController < ApplicationController

  def create
    session = Session.new(session_params)
    if session.save
      session.session_users.create(user: current_user)
      render json: session
    else
      render json: {
        error: session.errors.full_messages.to_sentence
      }, status: 422
    end
  end

  def destroy
    current_session
    session.destroy
    render status: 200
  end

  def show
    current_session
    render json: session
  end

  def update
    current_session
    if session.update(session_params)
      render json: session
    else
      render json: {
        error: session.errors.full_messages.to_sentence
      }, status: 422
    end
  end

  private

  def current_session
    session = Session.find(params[:id])
  end

  def session_params
    params.require(:session).permit(:id, :name, :description)
  end
end

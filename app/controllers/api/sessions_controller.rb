class SessionsController < ApplicationController
  before_action :current_session

  def current
    render json: session.current
  end

  def update
    GameShift.new(game_set: game_set)
  end

  def next
    render json: session.next(params[:game_shift_id])
  end

  def previous
    render json: session.previous(params[:game_shift_id])
  end

  def jump_to
    render json: session.jump_to(params[:game_shift_id])
  end

  private

  def current_session
    session ||= Session.find(params[:id])
  end

  def session_params
    params.require(:session).permit(:id, :user)
  end

  def game_shift_params
    params.require(:session)[:game_shift].permit(:game_set)
  end
end

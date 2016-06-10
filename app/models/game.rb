# == Schema Information
#
# Table name: games
#
#  id                 :integer          not null, primary key
#  name               :string
#  description        :text
#  activated_dynamics :integer          is an Array
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Game < ActiveRecord::Base
  after_create :create_game_shift

  has_many :game_users, dependent: :destroy
  has_many :users, through: :game_users

  has_many :game_shifts, dependent: :destroy

  validates :name, presence: true

  private

  def current_state
    self.game_shifts.last
  end
end

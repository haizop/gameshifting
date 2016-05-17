# == Schema Information
#
# Table name: sessions
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Session < ActiveRecord::Base
  has_many :session_users, dependent: :destroy
  has_many :users, through: :session_users
  has_many :game_shifts, dependent: :destroy
end
